using core.BL.Service;
using core.BL.Service.Impl;
using ef;
using efdb;
using efdb.BL.Service.Impl;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
string CORSOpenPolicy = "OpenCORSPolicy";
builder.Services.AddCors(options =>
{
    options.AddPolicy(
      name: CORSOpenPolicy,
      builder => {
          builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
      });
});
builder.Services.AddDbContext<ApplicationDbContext>();

builder.Services.AddSingleton<IStorageService, MySQLStorageService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(CORSOpenPolicy);
app.UseAuthorization();

app.MapControllers();

app.Run();
