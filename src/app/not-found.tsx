import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Terminal } from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1rem",
      }}
    >
      <Container size="md">
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              backgroundColor: "var(--color-accent-subtle)",
              color: "var(--color-accent)",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "0.875rem",
            }}
          >
            <Terminal size={16} />
            <span>ERROR 404: ROUTE_NOT_FOUND</span>
          </div>

          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Page Not Found
          </h1>

          <p
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: "480px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            The requested resource could not be found or has been relocated in the portfolio architecture.
          </p>

          <Button href="/" variant="primary" size="lg" leftIcon={<Home size={18} />}>
            Return to Homepage
          </Button>
        </div>
      </Container>
    </div>
  );
}

