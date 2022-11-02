from django.db import models

# Create your models here.
class Items(models.Model):
    p_no = models.IntegerField(blank=True, null=True)
    p_name = models.CharField(max_length=50, blank=True, null=True)
    p_qty_rem = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'items'

