resource "aws_s3_bucket" "api_bucket" {
  bucket = "api.${var.bucket_name}"
  tags = var.common_tags
}
resource "aws_s3_bucket_acl" "api_bucket_acl" {
  bucket = aws_s3_bucket.api_bucket.id
  acl = "public-read"
  #  access_control_policy = templatefile("templates/s3-policy.json", { bucket = "www.${var.bucket_name}" })
}

resource "aws_s3_bucket_cors_configuration" "api_bucket_cors" {
  bucket = aws_s3_bucket.api_bucket.id

  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET"]
    allowed_origins = ["https://www.${var.domain_name}"]
    max_age_seconds = 3000
  }
}
