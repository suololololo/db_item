# Generated by Django 2.0.9 on 2020-06-25 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('db_item', '0002_auto_20200625_2020'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods',
            name='goods_id',
            field=models.CharField(db_column='goods_id', max_length=128, unique=True, verbose_name='商品id'),
        ),
    ]