# IGenSpectrum Website

This is the GitHub repository for the [IGenSpectrum website](https://igenspectrum.berkeley.edu).

## OCF Hosting

The IGenSpectrum website is a static website hosted on the [OCF servers](https://www.ocf.berkeley.edu/docs/services/web/). 

You can log into IGenSpectrum's OCF account using SSH; the details of how to do this are in the "how to do things" document.

## Making changes

Before making major changes, it is a good idea to back up the existing website on OCF. To do this, SSH into the OCF account as above and use the command `backup` (or alternatively `./backup.sh`). This will save the current website to the directory `~/web_archive` with the format `backup_MM_DD_YYYY.tar.gz`.

To make changes to the website, start by making a pull request on GitHub with your proposed changes.

Once your changes have been merged with the main branch, update the website by SSHing into the OCF account and running the command `update` or `./update.sh`. This will fetch the latest version of the main branch from GitHub into the directory `~/public_html`.

## License
[ACSL](https://anticapitalist.software/)
