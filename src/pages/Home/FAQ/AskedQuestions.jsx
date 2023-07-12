import { Card, Container, ListGroup } from "react-bootstrap";

const AskedQuestions = () => {
  const faqData = [
    {
      id: 1,
      question: 'What is the return policy for Lego toys?',
      answer: 'We accept returns within 30 days of purchase. Please ensure the item is in its original condition and packaging. Contact our customer support for return instructions.',
    },
    {
      id: 2,
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary depending on the destination. Please check our website for more information.',
    },
    {
      id: 3,
      question: 'Are Lego sets suitable for all age groups?',
      answer: 'Lego sets are designed for various age ranges, from toddlers to adults. Each set has an age recommendation to ensure safe and enjoyable play. Please refer to the product description for specific age guidelines.',
    },
    // Add more AskedQuestions items as needed
  ];

  return (
    <Container>
        <div className="faq mt-5 pt-5">
      <h2 className="text-center pb-3">Frequently Asked Questions</h2>
      <Card>
        <ListGroup variant="flush">
          {faqData.map((item) => (
            <ListGroup.Item key={item.id}>
              <h5>{item.question}</h5>
              <p>{item.answer}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
    </Container>
  );
};

export default AskedQuestions;
