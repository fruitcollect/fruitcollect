# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :directory_indexes     # One index per folder. Pretty URLs
activate :gzip
activate :livereload

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

helpers do
  def fruit_choices
    html_elem = ""
    data.fruits.fruits.each do |key, value|
      html_elem << "<div class='donneur fruit-box' style='background-color:#{value}; border-color: #{value}'>" \
                   "<label for='#{key}'>#{key}" \
                   "<input type='checkbox' name='Type de fruits' value='#{key}' />" \
                   "</label></div>"
    end
    html_elem
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  activate :minify_html
  activate :minify_javascript, :inline => true
  set :js_compressor, Uglifier.new(:mangle => {:toplevel => false}, :compress => {:unsafe => true}, :output => {:comments => :none}) # Do not mangle top level names (callbacks can be affected)
  # activate :asset_hash
end
