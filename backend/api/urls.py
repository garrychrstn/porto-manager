from rest_framework import routers
from . api import *

router = routers.DefaultRouter()
router.register('api/exp', ExpViewSet, 'exp')
router.register('api/art', ArtViewSet, 'art')
router.register('api/quo', QuoViewSet, 'quo')
router.register('api/tod', ToDViewSet, 'tod')
router.register('api/abo', AboViewSet, 'abo')

urlpatterns = router.urls