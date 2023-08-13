
from rest_framework import viewsets, generics
from rest_framework.response import Response
from . models import Detection
from .serializers import DetectionSerializers
import tensorflow as tf

import numpy as np


def load_model(model_path):
    model= tf.keras.models.load_model(model_path)
    return model
def make_prediction (image_path,model):
    image_size = (224, 224)
    image_content = image_path.read()
    print(image_content)
    image = tf.image.decode_jpeg(image_content, channels=3)
    image = tf.image.resize(image, image_size)
    image = tf.image.per_image_standardization(image)
    image= tf.expand_dims(image, axis=0)

    prediction= model.predict(image)
    predicted_class = tf.argmax(prediction, axis=1)[0]
    class_labels = ["Blight", "Rust", "healthy"]
    predicted_class_label = class_labels[predicted_class]
    predicted_probs = np.max(prediction, axis=1)
    
    return (predicted_class_label,predicted_probs)
# Create your views here.
class LeafDiseaseDetection(viewsets.ModelViewSet):
    serializer_class= DetectionSerializers
    def get_queryset(self):
        data= Detection.objects.all()
        return data
    def create(self, request, *args, **kwargs):
        image= request.FILES['image']
        model= load_model('static/my_model.h5')

        predicted_class,predicted_probs= make_prediction(image,model)
        prediction= Detection.objects.create(
            image= image,
            predicted_class=predicted_class,
            predicted_probs=round(predicted_probs[0]*100 , 2)
        )
        serializer= self.get_serializer(prediction)
        return Response(serializer.data)
    
class PredictionList(generics.ListAPIView):
    queryset= Detection.objects.all()
    serializer_class= DetectionSerializers