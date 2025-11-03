FROM python:3.11-alpine AS builder
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
WORKDIR /app
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.11-alpine
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY . .
EXPOSE 10000
RUN pip install uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "10000"]