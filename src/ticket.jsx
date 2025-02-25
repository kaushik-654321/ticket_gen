import { useForm } from "./formContext";
import Form from "./form";
import TicketBody from "./ticketBody";

function Ticket() {
  const { formData } = useForm();
  console.log(formData);
  return (
    <>
      {formData.name ? (
        <TicketBody
          name={formData.name}
          imgUrl={formData.imageUrl}
          github={formData.github}
        />
      ) : (
        <Form />
      )}
    </>
  );
}

export default Ticket;
