import { h } from "preact";
import { Link } from "preact-router/match";

export const About = () => (
    <div>
        <p>This is a Preact app being rendered on the server. It uses Unistore for state management and preact-router for routing.</p>
        <Link href="/">Home</Link>
    </div>
);
