-- Add validation constraints to comments table

-- Email format validation
ALTER TABLE public.comments
ADD CONSTRAINT email_format_check 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Name length validation (2-100 characters)
ALTER TABLE public.comments
ADD CONSTRAINT name_length_check
CHECK (char_length(trim(name)) BETWEEN 2 AND 100);

-- Comment length validation (10-2000 characters)
ALTER TABLE public.comments
ADD CONSTRAINT comment_length_check
CHECK (char_length(trim(comment)) BETWEEN 10 AND 2000);

-- Email max length
ALTER TABLE public.comments
ADD CONSTRAINT email_length_check
CHECK (char_length(email) <= 255);