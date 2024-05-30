import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  export default function HomePageContent(){
    return(
        <div className=" mt-10 flex justify-center items-center">

<article className="grid  md:grid-cols-3 gap-3 w-3/4 m-5 lg:gap-20">
     <Card className="bg-gray-800 border-none">
      <CardHeader>
        <CardTitle className="text-yellow-500">Assignment Creator</CardTitle>
        <CardDescription  className="text-gray-400">Alows users to create new assignments seamlessly through an intuitive chat interface</CardDescription>
      </CardHeader>
    
      <CardContent className="grid gap-4 text-white">
      <ul className="list-disc">
            <li className="text-sm font-medium ">
       Users can initiate the creation of a new assignment by simply starting a chat session.</li>

            <li className="text-sm font-medium ">The chat interface prompts users with questions to gather necessary details for the assignment.
</li>
</ul>
      </CardContent>
    
    </Card>

    <Card className="bg-gray-800 border-none">
      <CardHeader>
        <CardTitle className="text-yellow-500">Rubric generator</CardTitle>
        <CardDescription  className="text-gray-400">Empowers users to design detailed rubrics through an interactive chat interface.</CardDescription>
      </CardHeader>
    
      <CardContent className="grid gap-4 text-white">
      <ul className="list-disc">
            <li className="text-sm font-medium ">
            The chat system guides users through the steps of rubric development with clear and contextual prompts.</li>

            <li className="text-sm font-medium "> Users initiate the rubric creation process by engaging with the chat interface.
</li>
</ul>
      </CardContent>
    
    </Card>


  

    <Card className="bg-gray-800 border-none">
      <CardHeader>
        <CardTitle className="text-yellow-500">Assignment Grader</CardTitle>
        <CardDescription  className="text-gray-400">Allows users to grade assignments interactively through a chat interface</CardDescription>
      </CardHeader>
    
      <CardContent className="grid gap-4 text-white">
      <ul className="list-disc">
            <li className="text-sm font-medium ">
            Users initiate the grading process by starting a session in the chat interface.</li>

            <li className="text-sm font-medium ">The chat system guides users through the grading steps with clear, context-specific prompts.
</li>
</ul>
      </CardContent>
    
    </Card>



    </article>
    </div>
    )
    }