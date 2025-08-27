import { Form } from "react-router-dom";

export async function contactData({ request }){
    try{    
        const response = await request.formData();
        const data = Object.fromEntries(response);
        console.log(data);
        return null;
    }catch(error){
        console.log(error)
    }
}

export const Contact = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-[30px] font-bold py-2">Fill the details</h1>
      <div>
        <Form 
        className="border-2 border-black w-[400px] p-4 flex flex-col gap-6"
        method="POST"
        action="/contact"
        >
            <div className="flex flex-col gap-1">
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                name="username"
                id="username"
                placeholder="enter your username..."
                className="border-black border-2 p-2 text-[18px]"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                name="email"
                id="email"
                placeholder="enter your email..."
                className="border-black border-2 p-2 text-[18px]"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="message">Message:</label>
                <textarea 
                name="message"
                id="message"
                placeholder="enter your message..."
                className="resize-none border-2 p-2 text-[18px] border-black h-[200px]"
                />
            </div>
            <button type="submit" className="bg-black text-white py-2">Submit</button>
        </Form>
      </div>
    </section>
  );
};
// "Error: You made a POST request to "/contact" but did not provide an `action` for route "0-4", so there is no way to handle the request."