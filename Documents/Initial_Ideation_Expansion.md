# Phased Project Approach

## Phase 1: Extracting Answers from PDF Submissions

### Overview
The first phase is dedicated to segmenting the PDF document to isolate sections that represent each student's answers to individual questions, setting a foundation for detailed analysis.

### Implementation Steps:

1. **PDF Segmentation using RegEx**:
   - Apply Regular Expressions (RegEx) to pinpoint sections within the PDF corresponding to each answer.
   - Design a pattern that effectively identifies the breaks between different answers in the submissions.

2. **Extraction and Structuring**:
   - Extract answers following the RegEx patterns.
   - Compile the extracted data into a DataFrame, structuring it for ease of analysis and access.

### Data Structuring:

- The DataFrame will feature columns for:
  - Student ID
  - Student Name
  - Question Number
  - Answer Content
  - Creativity
  - Depth of Answer
  - Conceptual Understanding
  - Feedback

- The "Creativity", "Depth of Answer", and "Conceptual Understanding" columns are designated as target variables, setting the stage for a nuanced evaluation process.

### Model Integration for Evaluation:

- To assess the target variables, we'll integrate a suite of models, each tailored to evaluate a specific aspect:
  - **Creativity Model**: Assesses the originality and inventive aspects of the answers.
  - **Depth of Answer Model**: Determines the thoroughness and detail within the responses.
  - **Conceptual Understanding Model**: Gauges the grasp of underlying concepts conveyed in the answers.
  - **Additional aspects as required**

- These models will facilitate a comprehensive evaluation, providing nuanced insights into various dimensions of the students' answers.

## Phase 2: Proof of Concept (POC) Development with Pre-Training

### Overview
Prior to developing specialized models for each target variable, this phase aims to establish a Proof of Concept (POC) using models like ChatGPT. The focus here will be on data collection, annotation, and fine-tuning a base model to validate the approach.

### Implementation Steps:

1. **Data Collection**:
   - Gather a representative sample dataset that mirrors the type of student answers expected in the assignments.
   - This dataset should cover a variety of responses to ensure the model is exposed to diverse answer styles and contents.

2. **Data Annotation**:
   - Collaborate with Teaching Assistants (TAs) and professors to annotate the dataset.
   - Annotations should reflect the target variables: Creativity, Depth of Answer, and Conceptual Understanding, providing a basis for model training.

3. **Model Selection and Fine-Tuning**:
   - Choose a suitable base model, such as ChatGPT, for the POC.
   - Fine-tune this model on the annotated dataset to adapt its responses to the evaluation criteria specific to this project.

### Objectives:

- **Validation**: The POC aims to validate the feasibility of using AI models for evaluating student answers.
- **Model Calibration**: Fine-tuning helps in calibrating the model to align closely with the evaluation standards set by educators.

### Upcoming Phases:

- **POC Evaluation**: Assess the performance of the POC, ensuring it meets the project's objectives and provides a reliable basis for expanding to more detailed models.
- **Expansion**: Based on the POC outcomes, proceed to develop and integrate more sophisticated models for each target variable.

## Phase 3: Detailed Evaluation and Feedback Generation

### Overview
After identifying the target variables for each student's answer, the next phase focuses on a detailed evaluation process, leveraging the suite of models to assign quantitative values to the 'Creativity', 'Depth of Answer', and 'Conceptual Understanding' aspects of each response.

### Implementation Steps:

1. **Model Deployment**:
   - Deploy the selected models to analyze the answers in the DataFrame.
   - Each model will evaluate the answers to generate scores for the respective target variables.

2. **Quantitative Assessment**:
   - Convert the model outputs into quantifiable scores that reflect the quality of each answer in terms of creativity, depth, and understanding.

3. **Feedback Generation**:
   - Develop a system to translate the quantitative assessments into constructive feedback.
   - This feedback will be tailored to each answer, providing students with insights into the strengths and areas for improvement in their responses.

### Integration with Data:

- Update the DataFrame to include the scores and feedback, aligning them with the corresponding student ID, name, and question number.
- Ensure that the evaluation process maintains the integrity of the original data, allowing for a transparent and fair assessment.

### Final Steps:

- **Review and Adjustment**: Implement a review mechanism to ensure the evaluation aligns with expected standards and allows for manual adjustments if necessary.
- **Output Preparation**: Format the final results and feedback for dissemination, ensuring they are accessible and understandable for both educators and students.

## Next Steps:

- Detail the finalization and output preparation processes, emphasizing how the results will be communicated and utilized.

# Further thoughts and exploration

1. [Integration of RAG](./Integration_of_rag.md)
