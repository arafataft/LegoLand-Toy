import { Container, Row, Col, Card } from 'react-bootstrap';
import './Blog.css';
import useTitle from '../../Hook/useTitle';

const Blog = () => {
  useTitle('Blog');
  const blogPosts = [
    {
      id: 1,
      title: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
      answer: "An access token is like a pass that an app uses to access an API for a user. It has the user's permissions and lasts for a short time. A refresh token lasts longer and helps get a new access token without needing the user to log in again. They both let apps safely use APIs without having to store user credentials directly.",
      answer1:"Access tokens are like keys that confirm your identity and grant you permission to use an app or system. Refresh tokens help keep those keys current by renewing them when they expire. Access tokens should be stored safely on your device using methods like cookies or encrypted storage. Refresh tokens are usually kept securely on the server. When you make a request to use an app, the access token is used to prove who you are. If it's expired, the refresh token can get you a new one without needing to log in again."
    },
    {
      id: 2,
      title: 'Compare SQL and NoSQL databases? ',
      answer: 'SQL and NoSQL databases are two different types of database management systems that differ in their data models, scalability, flexibility, and performance characteristics. SQL databases are relational databases that store data in tables with predefined schemas and use SQL for querying. They are ideal for applications that require complex querying and transactional consistency. In contrast, NoSQL databases are non-relational and use different data models such as key-value, document, graph or column-family. They scale horizontally and handle large volumes of data with ease, but sacrifice some of the transactional consistency offered by SQL databases. Overall, the choice of which type of database to use depends on the specific requirements of your application.',
    },
    {
      id: 3,
      title: 'What is express js? What is Nest JS?',
      answer: "Express.js is a web application framework for Node.js that provides features and tools to build web applications and APIs. It offers flexibility, minimalistic architecture, middleware support, templating engine integration, and high scalability. Express is built on top of Node.js, making it performant and used by many companies worldwide.",
      answer1:" NestJS is a web application framework for Node.js that uses modern JavaScript features and OOP principles to provide a modular architecture with a powerful Dependency Injection system. It includes support for popular web technologies, strong typing through TypeScript, and is compatible with other libraries and frameworks within the Node.js ecosystem. NestJS enables developers to build scalable and maintainable server-side applications."
    },
    {
      id: 4,
      title: 'What is MongoDB aggregate and how does it work ?',
      answer: "MongoDB Aggregate is a tool for data analysis operations on MongoDB databases. It takes input from one or more collections and uses the aggregation pipeline to filter, transform, and group the data into a new result set. Each stage in the pipeline performs a specific operation on the input documents and passes the output to the next stage. The pipeline has many stages and operators available, making it easy to perform complex data transformations and calculations.",
    },
  ];

  return (
    <div className="blog-section">
      <Container>
        <h2 className="section-title text-center">Q&A Blog</h2>
        <Row xs={1} lg={2}  className="g-4">
          {blogPosts.map((post) => (
            <Col key={post.id}>
              <Card className="card-style">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <hr />
                  <Card.Text>{post?.answer}</Card.Text>
                  <Card.Text>{post?.answer1}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;