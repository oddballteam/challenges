# Provision Vagrant with Ansible

### Requirements

You'll need [Vagrant](https://www.vagrantup.com/) and [Ansible](https://docs.ansible.com/ansible/intro_installation.html) for this exercise.

### The task(s)

Your submission should demonstrate best practices in regards to building and deploying a standard php nginx appliation, installing some packages, and starting the application up. 

The application has a few requirements
* nginx installed and configured
* php-fpm configured with nginx
* mysql installed and secured
* elasticsearch installed and running
* composer packages installed and running


### Tips & Guidance:

- do not use ansible-galaxy for this, its overkill
- feel free to copy roles for specific things, but not a whole role for the application
- the application reads from a `.env` file, and is looking for `DB_HOST`, `DB_USER`, and `DB_PASS`
- Do not alter the `Vagrantfile`.
- Do not include `.vagrant/`, `.retry` files, or other detritus.
- Do add notes on running your solution, or why you choose a particular solution, in a COMMENTS.md file.
- Avoid chaining commands using `|` and `&&` in your `playbook.yml`