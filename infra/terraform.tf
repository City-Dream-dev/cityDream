terraform {
  required_version = "~> 1.2"

  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 4.24"
    }
  }

  backend "s3" {
    bucket = "citydream.pp.ua-terraform"
    key = "prod/terraform.tfstate"
    region = "eu-central-1"
    profile = "citydream"
  }
}
