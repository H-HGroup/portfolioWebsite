from django.contrib import admin  
from django.urls import path, include  
from django.conf.urls.i18n import i18n_patterns  
from django.conf import settings  
from django.conf.urls.static import static  

urlpatterns = [  
    path('admin/', admin.site.urls),  
]  

urlpatterns += i18n_patterns(  
    path('', include('portfolio.urls')),   
    path('api-auth/', include('rest_framework.urls')),  
)  

# Static and media file serving  
if settings.DEBUG:  # Only add static/media URLs in development  
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)  
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)