# Architecture

We have chosen to adopt a microservice architecture over a monolithic one to ensure future scalability. By breaking our application into smaller, specialized services like authentication, signaling, and media handling, we can scale each component independently to meet growing demands. This approach allows for easier feature additions, improved performance, and enhanced flexibility in technology choices as our video conferencing platform evolves.

- ## **Microservice Architecture**
    
    The Curious Connect project leverages a microservices architecture, a modern and scalable approach to software design that enhances flexibility, maintainability, and agility. In this architecture, the system is composed of multiple independent services, each focusing on a specific business capability.
    
- ## **Key Components**
    1. **Service Components**: Each microservice encapsulates a specific functionality, such as user management, content delivery, analytics, or communication.
    2. **API Gateway**: Acts as a single entry point for clients to interact with the system. It handles routing requests to the appropriate microservices and provides a unified interface.
    3. **Database**: Microservices typically have their databases (e.g., SQL, NoSQL) to manage their data independently, promoting isolation and scalability also known as Database Per Service but due to some challenges, we will decide whether to use multiple database instances or a single database. 
    4. **Message Brokers**: Asynchronous communication between microservices is facilitated through message brokers like Redis, Kafka, RabbitMQ, or AWS SQS, ensuring loose coupling and fault tolerance. Also Redis Can be used as a cache memory.
    5. **Containerization**: Services are often containerized using technologies like Docker, and managed by Kubernetes allowing for consistent deployment and management across various environments.
- ## **Advantages**
    1. **Scalability**: Individual services can be scaled independently based on demand, optimizing resource utilization.
    2. **Flexibility**: Developers can choose the most suitable technology stack for each microservice, promoting innovation and productivity.
    3. **Fault Isolation**: Issues in one microservice typically do not impact others, reducing the blast radius of failures.
    4. **Continuous Deployment**: Each service can be deployed and updated independently, enabling faster release cycles and reducing downtime.
- ## **Challenges**
    1. **Complexity**: Managing a distributed system introduces complexities in monitoring, testing, and debugging.
    2. **Inter-Service Communication**: Efficient communication patterns (e.g., RESTful APIs, message queues, Pub/Sub) must be established for seamless interactions between services.
    3. **Data Consistency**: Maintaining data consistency across multiple services (Multiple DB Instances) may require strategies such as eventual consistency or distributed transactions.
    4. **Security**: Robust security measures, including authentication, authorization, and data encryption, are crucial to protect the microservices architecture.
- ## **Conclusion**
    
    The microservices architecture adopted in the Curious Connect project provides a scalable, resilient, and agile foundation for developing and deploying modern applications. By breaking down the system into manageable components, each responsible for specific functionalities, the architecture promotes modularity, innovation, and efficient resource utilization.
    
#
<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <a href="./Overview.md">< Previous</a>
  <a href="../README.md" style="margin: 0 auto;">Home</a>
  <a href="./HLD.md">Next ></a>
</div>