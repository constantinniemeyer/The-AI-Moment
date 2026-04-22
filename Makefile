RUBY_BUNDLE ?= bundle exec

.PHONY: setup serve build-local build-integration build-production clean

setup:
	bundle config set --local path vendor/bundle
	bundle install

serve:
	$(RUBY_BUNDLE) jekyll serve --livereload --livereload-port 35730 --drafts

build-local:
	$(RUBY_BUNDLE) jekyll build --config _config.yml --destination _site_local

build-integration:
	$(RUBY_BUNDLE) jekyll build --config _config.yml,_config_integration.yml --destination _site_staging

build-production:
	JEKYLL_ENV=production $(RUBY_BUNDLE) jekyll build --config _config.yml --destination _site_prod

clean:
	rm -rf _site _site_local _site_local_test _site_staging _site_prod .jekyll-cache .jekyll-metadata
