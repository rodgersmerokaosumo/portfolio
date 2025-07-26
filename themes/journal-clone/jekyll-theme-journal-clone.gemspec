Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-journal-clone"
  spec.version       = "0.1.0"
  spec.summary       = "Custom Journal-style Jekyll theme"
  spec.authors       = ["Rodgers Meroka Osumo"]
  spec.email         = ["osumorodgersmeroka@gmail.com"]
  spec.license       = "MIT"
  spec.homepage      = "https://github.com/rodgersmerokaosumo/portfolio"
  spec.files         = Dir.glob("**/*").reject { |f| f =~ /^(spec|test)/ }
  spec.require_paths = ["lib"]
  spec.add_dependency "jekyll", "~> 4.3"
end
