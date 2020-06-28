import os
from  django.core import serializers


def goods_dicretory_path(instance,filename):
    ext = filename.split('.').pop()
    filename = '{0}{1}.{2}'.format(instance.name, instance.identity_card, ext)
    return os.path.join(instance.major.name, filename)


def output_money(money):
    return money/100
def input_money(money):
    return money*100

