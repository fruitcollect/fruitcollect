# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :relative_assets       # Links and scripts do not start with /
activate :directory_indexes     # One index per folder. Pretty URLs
set :relative_links, true     # GitHub Pages dev problem with urls..


# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false


# Assets
set :css_dir, "assets/css"
set :js_dir, "assets/js"
set :fonts_dir, "assets/fonts"
set :images_dir, "assets/img"
set :partials_dir, "partials"

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

set :site_url, ""

configure :build do
  activate :minify_css
  activate :minify_html
  set :site_url, "/fruitcollect"
  activate :minify_javascript, :inline => true
  set :js_compressor, Uglifier.new(:mangle => {:toplevel => true}, :compress => {:unsafe => true}, :output => {:comments => :none})
  # activate :asset_hash
end
