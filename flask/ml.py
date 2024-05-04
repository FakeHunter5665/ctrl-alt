import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

# Download necessary resources (comment out if already downloaded)
nltk.download('vader_lexicon')

analyzer = SentimentIntensityAnalyzer()
def calc(data):
   scores = analyzer.polarity_scores(data)
   return scores