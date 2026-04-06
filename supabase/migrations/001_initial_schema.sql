-- FormRight.ai initial schema
-- Run this in Supabase SQL Editor or via supabase db push

CREATE TABLE quiz_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  answers JSONB,
  recommendation TEXT,
  completed BOOLEAN DEFAULT false,
  utm_source TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE affiliate_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES quiz_sessions(id),
  service TEXT,
  placement TEXT,
  recommendation_match BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_quiz_sessions_created ON quiz_sessions(created_at DESC);
CREATE INDEX idx_quiz_sessions_recommendation ON quiz_sessions(recommendation);
CREATE INDEX idx_affiliate_clicks_service ON affiliate_clicks(service);
CREATE INDEX idx_affiliate_clicks_session ON affiliate_clicks(session_id);
