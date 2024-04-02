04/02/2024

Your meeting with Professor Brown focused on developing an auto grader software, and the discussion revolved around a step-by-step plan to create a system that can grade assignments by comparing them to a rubric and provide meaningful feedback. Here's a summary of the key points and steps discussed:

1. **Initial Assessment**: The goal is to determine how closely the tool's grading aligns with the professor's grading. This involves using a regression model to predict scores from unstructured text, essentially seeing if the tool's predicted scores are in agreement with the professor's scores.

2. **Model Interpretability**: Understanding why the tool assigned a specific score (e.g., why an assignment received 89 out of 92) is crucial. This involves analyzing the factors that influenced the grading.

3. **Input Requirements**: The system will anonymize student names and require assignment rubrics and scores for processing. 

4. **Feature Extraction**: The tool will extract features from unstructured text using a language model, identifying elements like the presence of specific content, level of detail, and conceptual understanding. These features will be based on the assignment rubric.

5. **AutoML**: Automatic Machine Learning (AutoML) will be used to predict scores, utilizing the extracted features.

6. **Rubric Interaction**: The tool can either accept an uploaded rubric or suggest one through prompt engineering. It will interact with the user (e.g., the professor) to refine and confirm the rubric.

7. **Feature Rating**: Once a rubric is established, the system will extract features from assignments and rate them on a scale (e.g., 1 to 20), forming the basis for the predictive model.

8. **Data Preparation**: Anonymized assignments and rubrics will be used as training data to develop and validate the grading model.

9. **Validation and Feedback**: The tool will use historical data to validate its grading accuracy. Once validated, it can use interpretability tools like SHAP to explain scores and leverage language models to provide constructive feedback.

10. **Ongoing Tuning**: The software will require continuous adjustments to improve its grading accuracy and feedback relevance, focusing on effective feature extraction and understanding the impact of various features on the grading.

The meeting emphasized a comprehensive approach that combines machine learning, natural language processing, and user interaction to create an effective auto-grading tool that aligns with human grading practices and offers transparent, actionable feedback.
