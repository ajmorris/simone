source "http://rubygems.org"

group :development do
  gem 'sass'                    # Sass.
  gem 'sass-globbing'           # Import Sass files based on globbing pattern.
  gem 'compass'                 # Framework built on Sass.
  gem 'compass-validator'       # So you can `compass validate`.
  gem 'oily_png'                # Faster Compass sprite generation.
  gem 'css_parser'              # Helps `compass stats` output statistics.
  gem "compass-960-plugin"      # 960 gridder without html markup)
  gem "therubyracer"            # V8 JavaScript Engine (for Uglifier)
  gem "jammit"                  # CSS / JS Compression and Concatination
  gem "uglifier"
  gem 'guard'                   # Guard event handler.
  gem 'zurb-foundation'         # Get Foundation in there as well.
  # Dependency to prevent polling. Setup for multiple OS environments.
  # Optionally remove the lines not specific to your OS.
  # https://github.com/guard/guard#efficient-filesystem-handling
  gem 'rb-inotify', :require => false # Linux
  gem 'rb-fsevent', :require => false # Mac OSX
  gem 'rb-fchange', :require => false # Windows
  gem 'guard-compass'           # Compile on sass/scss change.
  gem 'guard-shell'             # Run shell commands.
  gem 'guard-livereload'        # Browser reload.
  gem 'yajl-ruby'               # Faster JSON with LiveReload in the browser.
  gem "guard-jammit"            # Compression and Concat through Guard
end