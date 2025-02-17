# Setup

Ensure ruby 3.4.1 is installed and selected
```
rvm list
rvm install 3.4.1
rvm use 3.4.1
```

If running on an M# mac and seeing this error during install
```
Error running '__rvm_make -j8',
please read /Users/work/.rvm/log/1739373386_ruby-3.3.7/make.log

There has been an error while running make. Halting the installation.
``` 

Try below instead

```
brew --prefix openssl@3
rvm install 3.4.1 --with-openssl-dir=your ssl directory path
```


Confirm running the right version
```
ruby --version
```

Install ruby gems
```
bundle install
```

Start the server
```
rails s -p 3001
```
