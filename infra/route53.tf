resource "aws_route53_zone" "main" {
  name = var.domain_name
  tags = var.common_tags
}

resource "aws_route53_record" "root-a" {
  zone_id = aws_route53_zone.main.zone_id
  name = var.domain_name
  type = "A"

  alias {
    name = aws_cloudfront_distribution.root_s3_distribution.domain_name
    zone_id = aws_cloudfront_distribution.root_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www-a" {
  zone_id = aws_route53_zone.main.zone_id
  name = "www.${var.domain_name}"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.www_s3_distribution.domain_name
    zone_id = aws_cloudfront_distribution.www_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "mx" {
  zone_id = aws_route53_zone.main.zone_id
  name    = ""
  type    = "MX"

  records = [
    "10 mx.zoho.eu.",
    "20 mx2.zoho.eu.",
    "50 mx3.zoho.eu.",
  ]

  ttl = 14400
}

resource "aws_route53_record" "domain_validation" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "_def3902ac27b1aaccc329087b712b743.citydream.pp.ua"
  type    = "CNAME"
  records = ["_e5ee5911c48ed7943acc98a5137ac203.wsqgzrdths.acm-validations.aws."]
  ttl     = 43200
}

resource "aws_route53_record" "dkim" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "zmail._domainkey.citydream.pp.ua"
  type    = "TXT"
  records = ["v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrL51UgCTV/wE2mSGdXjohLJ3PtUEXXYRQZ+sp3w1/M0bP52KdGeqzCb/ndeLPJZczPIKmgM+KGKyTzNKyImmUwPOCqcrX48dKjPS4ECrZ3JyPlRCOCgzVM7NDqFBAJ3ghyWmk7PoEP1QdBTpWYP2hPKLO0IJLDkGRW/RNXxDv7QIDAQAB"]
  ttl     = 3600
}

resource "aws_route53_record" "email-verification" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "citydream.pp.ua"
  type    = "TXT"
  records = ["v=spf1 include:zoho.eu ~all", "zoho-verification=zb08708965.zmverify.zoho.eu"]
  ttl     = 3600
}
