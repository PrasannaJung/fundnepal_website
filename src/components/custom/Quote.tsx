export function QuoteComponent() {
  return (
    <div className='hidden lg:flex items-center justify-center bg-muted p-6 xl:p-10'>
      <div className='mx-auto max-w-[500px] space-y-4'>
        <blockquote className='text-lg font-semibold leading-snug'>
          &ldquo;The customer service I received was exceptional. The support
          team went above and beyond to address my concerns.&rdquo;
        </blockquote>
        <div className='font-semibold'>Paribesh Koju</div>
        <div className='text-sm text-muted-foreground'>CEO, Annabazar</div>
      </div>
    </div>
  );
}
