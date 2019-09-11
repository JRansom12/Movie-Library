using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET api/Movie
        [HttpGet]
        public IHttpActionResult Get()
        {
            var movieList = db.Movies;
            return Ok(movieList);
            // Retrieve all movies from db logic
            //return new string[] { "movie1 string", "movie2 string" };
        }

        // GET api/Movie/5
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            Movie movie = db.Movies.FirstOrDefault(m => m.MovieId == id);
            return Ok(movie);
            // Retrieve movie by id from db logic
            //return "value";
        }

        // POST api/Movie
        [HttpPost]
        public void Post([FromBody]Movie value)
        {
            db.Movies.Add(new Movie()
            {
                Title = value.Title,
                Genre = value.Genre,
                Director = value.Director
            });
            db.SaveChanges();
            // Create movie in db logic
        }

        // PUT api/Movie/5

        public void Put(int id, [FromBody]Movie value)
        {
            var movie = db.Movies.FirstOrDefault(m => m.MovieId == id);
            movie.Title = value.Title;
            movie.Genre = value.Genre;
            movie.Director = value.Director;
            db.SaveChanges();
            // Update movie in db logic
        }

        // DELETE api/Movie/5
        [HttpDelete]
        public void Delete(int id)
        {
            Movie movie = db.Movies.Find(id);
            db.Movies.Remove(movie);
            db.SaveChanges();
            // Delete movie from db logic
        }
    }
}