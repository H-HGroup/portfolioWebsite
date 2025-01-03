from pathlib import Path  
from django.utils.translation import gettext_lazy as _  
import os  

# Build paths inside the project like this: BASE_DIR / 'subdir'.  
BASE_DIR = Path(__file__).resolve().parent.parent 

# Quick-start development settings - unsuitable for production  
SECRET_KEY = 'django-insecure-j%!cpq!22c7n+st3=f@fo#r40&vf2kj#7r@ia@sh2rxj(ts1c+'  
DEBUG = True  
ALLOWED_HOSTS = ['localhost', '127.0.0.1']  

# Application definition  
INSTALLED_APPS = [  
    'rest_framework',  
    'django.contrib.admin',  
    'django.contrib.auth',  
    'django.contrib.contenttypes',  
    'django.contrib.sessions',  
    'django.contrib.messages',  
    'django.contrib.staticfiles',  
    'portfolio',  
    'corsheaders'  ,
]  

MIDDLEWARE = [  
    'django.middleware.security.SecurityMiddleware',  
    'django.contrib.sessions.middleware.SessionMiddleware',  
    'corsheaders.middleware.CorsMiddleware',   
    'django.middleware.common.CommonMiddleware',  
    'django.middleware.csrf.CsrfViewMiddleware',  
    'django.contrib.auth.middleware.AuthenticationMiddleware',  
    'django.contrib.messages.middleware.MessageMiddleware',  
    'django.middleware.clickjacking.XFrameOptionsMiddleware',  
    'django.middleware.locale.LocaleMiddleware',  
    
]  

CORS_ALLOWED_ORIGINS = [  
    "http://localhost:5173",  
]  

ROOT_URLCONF = 'backend.urls'  

TEMPLATES = [  
    {  
        'BACKEND': 'django.template.backends.django.DjangoTemplates',  
        'DIRS': [],  
        'APP_DIRS': True,  
        'OPTIONS': {  
            'context_processors': [  
                'django.template.context_processors.debug',  
                'django.template.context_processors.request',  
                'django.contrib.auth.context_processors.auth',  
                'django.contrib.messages.context_processors.messages',  
            ],  
        },  
    },  
]  

WSGI_APPLICATION = 'backend.wsgi.application'  

# Database  
DATABASES = {  
    'default': {  
        'ENGINE': 'django.db.backends.postgresql',  
        'NAME': 'resume',  
        'USER': 'postgres',  
        'PASSWORD': 'postgres',  
        'HOST': 'localhost',  
    }  
}  

# Password validation  
AUTH_PASSWORD_VALIDATORS = [  
    {  
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',  
    },  
    {  
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',  
    },  
    {  
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',  
    },  
    {  
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',  
    },  
]  

# Internationalization  
LANGUAGE_CODE = 'fa'   
LANGUAGES = [  
    ('fa', 'Persian'),  
    ('en', 'English'),  
]   

LOCALE_PATHS = [  
    BASE_DIR / 'backend' / 'locale',  
]  

TIME_ZONE = 'UTC'  
USE_I18N = True  
USE_TZ = True  

# Static files (CSS, JavaScript, Images)  
STATIC_URL = 'static/'  
STATICFILES_DIRS = [BASE_DIR / 'static']  
MEDIA_URL = 'media/'  
MEDIA_ROOT = BASE_DIR / 'media'  

# Default primary key field type  
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'