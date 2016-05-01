require 'json'


module SiteJSON
  class Generator < Jekyll::Generator
    PATH = '_data/site.json'

    def generate(site)
      json = {}
      json[:me] = generate_me(site)
      write_file(json)
    end




    private
    def generate_me(site)
      site.data['me']
    end


    def write_file(json)
      File.open(PATH, 'w') do |f|
        json = JSON.pretty_generate(json)
        f.write(json + "\n")
      end
    end
  end
end


