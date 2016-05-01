Jekyll::Hooks.register :site, :post_write do |site|
  html = File.read('_site/resume/index.html')
  if system('which -s pandoc')
    file_name = [
      site.data['me']['first_name'],
      site.data['me']['middle_name'],
      site.data['me']['last_name'],
      'Resume'
    ].join('-')
    system("pandoc -sS _site/resume/index.html -o _site/resume/#{file_name}.docx")
  else
    puts 'Error: Unable to write resume.docx'
    puts '  Please install pandoc with "brew install pandoc"'
  end
end

