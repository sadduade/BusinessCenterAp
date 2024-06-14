from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import AppServerSerializer
from .models import AppServer


class AppServerView(APIView):
    def get(self, request, *args, **kwargs):
        app_servers = AppServer.objects.all()
        serializer = AppServerSerializer(app_servers, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = AppServerSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
