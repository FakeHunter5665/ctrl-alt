import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

# Download necessary resources (comment out if already downloaded)
nltk.download('vader_lexicon')

# Define some sample movie reviews
reviews = [
    "i am sad"
]

# Create a sentiment analyzer object
analyzer = SentimentIntensityAnalyzer()

# Analyze sentiment for each review
for review in reviews:
  scores = analyzer.polarity_scores(review)
  print(f"Review: {review}")
  print(f"  Compound Score: {scores['compound']}")  # Overall sentiment (-1: negative, 0: neutral, 1: positive)
  print(f"  Positive: {scores['pos']}")
  print(f"  Neutral: {scores['neu']}")
  print(f"  Negative: {scores['neg']}")
  print("-"*20)

def calc(data):
   scores = analyzer.polarity_scores(data)
   return scores