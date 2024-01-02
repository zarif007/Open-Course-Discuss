"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
    node_env: process.env.NODE_ENV,
    PORT: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    aiven_redis_host: process.env.AIVEN_REDIS_HOST,
    aiven_redis_post: process.env.AIVEN_REDIS_PORT,
    aiven_redis_username: process.env.AIVEN_REDIS_USERNAME,
    aiven_redis_password: process.env.AIVEN_REDIS_PASSWORD,
    Upstash_kafka_rest_url: process.env.UPSTASH_KAFKA_REST_URL,
    Upstash_kafka_rest_username: process.env
        .UPSTASH_KAFKA_REST_USERNAME,
    Upstash_kafka_rest_password: process.env
        .UPSTASH_KAFKA_REST_PASSWORD,
    Upstash_kafka_rest_brokers: process.env.UPSTASH_KAFKA_BROKERS,
    Upstash_kafka_rest_mechanism: process.env.UPSTASH_KAFKA_MECHANISM,
};
