# AI Workflow Comparison

## AI Workflow Comparison

For this exercise, I implemented the Home page of my AI Document Analyzer twice using GitHub Copilot Chat in Visual Studio Code. 
The objective was to compare the results of a vague AI prompt with a detailed, structured prompt that included planning, 
implementation constraints, and a verification step.

In the first implementation, I used a single prompt: "Build a home page for my AI Document Analyzer using React." 
Copilot generated a visually appealing landing page with a hero section, project description, instructions, an About section, 
and a document upload area. Although the interface looked complete, it focused mainly on presentation. 
It did not include an Analyze Document button, there was no structured review of the generated code, and no specific accessibility 
or edge-case requirements had been considered because they were not included in the prompt.

For the second implementation, I followed a more structured workflow. 
Before generating code, I asked Copilot to explain its implementation plan, including the recommended file structure, 
component organization, accessibility considerations, and possible edge cases. 
I then provided a detailed specification describing the required files, expected behavior, accessibility requirements, 
reusable components and verification instructions.

The second implementation produced a cleaner and more task-focused Home page.
The interface was organized into reusable components such as `App.jsx` and `Main.jsx`, making the code easier to maintain. 
The application included an Analyze Document button that remained disabled until a valid file was selected, improving both 
and correctness. The upload workflow was clearer and better aligned with the intended functionality of an AI document analysis application.

The verification step was one of the biggest improvements. Instead of simply accepting the generated code, 
I asked Copilot to review its own implementation. During this review, it identified several issues that required attention, 
including improving keyboard accessibility for the upload area, handling file re-selection after an upload attempt
and providing better handling for oversized files. These issues demonstrated that AI-generated code still requires 
human verification before it can be considered complete.

Overall, the second workflow required less manual correction because the prompt clearly defined the expected behavior and 
quality requirements. This exercise showed that effective AI-assisted development depends on providing precise specifications, 
reviewing the generated code carefully, and validating functionality rather than relying on a single, vague prompt.
