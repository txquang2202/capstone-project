import Kafka from "node-rdkafka";
import Logger from "./logger";
import dotenv from "dotenv";
dotenv.config();

const logger = new Logger();
const producer = new Kafka.Producer({
    "client.id": process.env.KAFKA_CLIENT_ID || "kafka-producer",
    "metadata.broker.list": process.env.KAFKA_BROKER_LIST || "localhost:9092",
    "dr_cb": true,
});

producer.on("ready", () => {
    logger.info("Kafka Producer is ready");
    const topic = process.env.KAFKA_TOPIC || "capstone";
    producer.produce(
        topic,
        -1,
        Buffer.from("Hello Kafka!"),
        null,
        Date.now()
    );
});

producer.on('delivery-report', (err, report) => {
    if (err) {
        logger.error('Error delivering message:', err);
    } else {
        logger.info('Message delivered:', report);
    }
});

producer.connect();

export default producer;