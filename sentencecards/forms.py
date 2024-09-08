from django import forms
from .models import SentenceCard

class SentenceCardForm(forms.ModelForm):
    class Meta:
        model = SentenceCard
        fields = ('german_sentence', 'hungarian_sentence')
        labels = {
            'german_sentence': "Német mondat / Satz auf Deutsch",
            'hungarian_sentence': "Magyar mondat / Satz auf Ungarisch",
        }