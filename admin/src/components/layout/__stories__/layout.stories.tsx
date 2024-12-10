import { Meta } from "@storybook/react";
import { Layout } from "..";

const meta = {
    title: "Components/Layout",
} satisfies Meta;

export default meta;

const MockComponent = () => (
    <div style={{ height: "100%", display: "flex", "width": "100%" }}>
        <div style={{ flex: 1, backgroundColor: "lightblue" }}>
            Content
        </div>
    </div>
);

export const Overview = () => (
    <Layout>
        <MockComponent />
    </Layout>
);
