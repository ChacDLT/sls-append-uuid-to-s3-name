# Serverless Append uuid to an s3 bucket name

Serverless framework plugin to add uuid to an s3 bucket name

## Getting Started

Add this plugin to your Serverless project following the Install directions below.

### Installing

Create a folder called `.serverless_plugins` in the root of your project.

Copy the file `append-to-s3-name.js` into that folder.

Update your `serverless.yml` file with the following:

Add to plugins list

```yaml
plugins:
  - append-to-s3-name
```

That's it!!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks to Connor Bray and his [repo](https://github.com/concon121/serverless-plugin-aws-resource-names) that help me get started
