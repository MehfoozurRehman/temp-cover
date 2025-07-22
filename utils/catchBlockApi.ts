import { NextResponse } from 'next/server';

export default function catchBlockApi<T>(error: Error): NextResponse<T | { error: string }> {
  console.error('GET request error:', error);

  if (error instanceof CustomError) {
    return NextResponse.json({ error: error.message }, { status: error.statusCode });
  } else if (error instanceof AnotherCustomError) {
    return NextResponse.json({ error: error.message }, { status: error.statusCode });
  } else {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

class AnotherCustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
