module MyGenerator
  class Generator < Jekyll::Generator
    def generate(site)
      @categories = []
      @tags = []

      site.posts.docs.each do |doc|
        @categories.concat(doc.data['categories'])
        @tags.concat(doc.data['tags'] || [])
      end

      site.data['categories'] = @categories.uniq
      site.data['tags'] = @tags.uniq
    end
  end
end





