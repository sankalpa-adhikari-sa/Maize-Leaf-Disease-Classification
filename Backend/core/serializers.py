from rest_framework import serializers
from . models import Detection

class DetectionSerializers(serializers.ModelSerializer):
    class Meta:
        model= Detection
        fields = '__all__'