# Predicting-User-Subscription

## Introduction:
Logistic Regression is a Machine Learning classification algorithm that is used to predict the
probability of a categorical dependent variable. In logistic regression, the dependent variable is
a binary variable that contains data coded as 1 (yes, success, etc.) or 0 (no, failure, etc.). In other
words, the logistic regression model predicts P(Y=1) as a function of X.

## Assumptions:
• Binary logistic regression requires the dependent variable to be binary.<br/>
• For a binary regression, the factor level 1 of the dependent variable should represent the
desired outcome.<br/>
• Only the meaningful variables should be included.<br/>
• The independent variables should be independent of each other. That is, the model
should have little or no multicollinearity.<br/>
• The independent variables are linearly related to the log odds.<br/>
• Logistic regression requires quite large sample sizes.<br/>

## Data:
The dataset comes from the UCI Machine Learning repository, and it is related to direct marketing
campaigns (phone calls) of a Portuguese banking institution. The classification goal is to predict
whether the client will subscribe (1/0) to a term deposit (variable y). The dataset can be
downloaded from here.

## Tasks
1. Read the dataset and print the following information for analysis.
Hint: Use Pandas to read the data and use pandas functions mentioned in slides for cleaning the missing
values and attributes

2. Plot the ‘y’ for counts to check the values of 0 and 1 in the prediction also plot the job, martial,
load and pooutcome.
Hint: Use the seaborn library function countplot.

3. Analyze the data using the y,job,martial and education for the insights.
Hint: Use Pandas groupby function for this.

4. Visualize the joint data e.g. job and y, martial and y, education and y for the insights.
Hint: Use pandas crosstab function to get the desired data and plot using matplotlib bar charts

5. Create dummy variables, that is variables with only two values, zero and one. Use the following
columns 'job', 'marital', 'default', 'housing', 'loan', 'poutcome'.
Hint: Use the pandas function get_dummies()

6. Drop the unknown columns [12, 16, 18, 21, 24].
Hint: Use the pandas drop function for this and drop the above mentioned columns

7. Check the independence between the independent variables by drawing the heat map of the
data
Hint: Use the seaborn heatmap function for this

8. Split the data into training and test sets.
Hint: X = data.iloc[:,1:] and y = data.iloc[:,0] then use the sklearn function train_test_split()

9. Fit logistic regression to the training set.
Hint: Use sklearn LogisticRegression() class for this and then use fit() method to train the
classifier.

10. Predicting the test set results and creating confusion matrix.
Hint: Use sklearn confusion_matrix() function for confusion matrix and classifier predict()
method for the predictions.

11. Print the Accuracy of the classifier using the score() method of the classifier.

12. Compute precision, recall, F-measure and support.
Hint: Use sklearn classification_report() function for this.
