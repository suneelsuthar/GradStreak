// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

console.info("waitlist-processor function started");

interface RequestBody {
  type?: "waitlist" | "contact";
  email: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  // ---- CORS headers (allow all origins) ----
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // ---- Handle preflight ----
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: RequestBody = await req.json();
    const { email, type = "waitlist", message } = body;

    // ---- Log the call ----
    console.info("Processor call received", {
      type,
      email,
      message: message ? `${message.substring(0, 20)}...` : undefined, // Log partial message for privacy/brevity
      method: req.method,
      url: req.url,
      userAgent: req.headers.get("user-agent"),
      timestamp: new Date().toISOString(),
    });

    if (!email) {
      throw new Error("Email is required");
    }

    if (type === "contact" && !message) {
      throw new Error("Message is required for contact form");
    }

    // ---- Just acknowledge success ----
    return new Response(
      JSON.stringify({ success: true, message: `${type} submission received` }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Processor error", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Invalid request",
      }),
      { status: 400, headers: corsHeaders }
    );
  }
});
