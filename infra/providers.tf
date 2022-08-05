provider "aws" {
  region = var.aws_region
  profile = "citydream"
}

provider "aws" {
  alias = "acm_provider"
  region = "us-east-1"
}
