# Generated by Django 2.0.9 on 2020-06-25 12:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('db_item', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods',
            name='goods_id',
            field=models.IntegerField(db_column='goods_id', unique=True, verbose_name='商品id'),
        ),
    ]