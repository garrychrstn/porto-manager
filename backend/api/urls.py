from rest_framework import routers
from . api import *

router = routers.DefaultRouter()
router.register('api/exp', ExpViewSet, 'exp')
router.register('api/art', ArtViwSet, 'art')
router.register('api/quo', QuoViewSet, 'quo')


urlpatterns = router.urls